import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

//components
import Input from "src/elements/Input";
import {
  GameWrapperStyled,
  GameCaretStyled,
  GameBallStyled,
  PlayingFieldStyled,
  ScoreBox,
  GameControls,
  GameSingleControl,
  GameActionsLogs,
  GameSingleControlWrapper
} from "./GameStyles";

//helpers
import socket from "src/helpers/socket";
import {
  SOCKET_GAME_CREATE_NEW_GAME,
  SOCKET_GAME_NEW_GAME_CREATED,
  SOCKET_GAME_USER_CONNECTED,
  SOCKET_GAME_COMMAND,
  SOCKET_GAME_COMMAND_ENEMY
} from "src/helpers/constants";


const ANIMATION_DURATION = .1;
const GAME_FIELD_SIZE = {
  width: 900,
  height: 600,
};
const GAME_RACKET_SIZE = {
  width: 12,
  height: 120,
};
const GAME_BALL_SIZE = 30;

const initialBallPosition = {
  y: (GAME_FIELD_SIZE.height / 2) - GAME_BALL_SIZE,
  x: (GAME_FIELD_SIZE.width / 2) - 55,
  dy: -8,
  dx: 16,
};

const initialRacketPosition = {
  x: 0,
  y: (GAME_FIELD_SIZE.height / 2) - (GAME_RACKET_SIZE.height / 2),
}

const initialEnemyRacketPosition = {
  x: 52,
  y: (GAME_FIELD_SIZE.height / 2) - (GAME_RACKET_SIZE.height / 2),
}

let racketPosition = initialRacketPosition;
let racketPositionEnemy = initialEnemyRacketPosition;
let ballPosition = initialBallPosition;
let score = {
  myScore: 0,
  enemyScore: 0,
};

function GameWrapper() {

  const [scoreState, setScore] = useState({
    myScore: 0,
    enemyScore: 0,
  });
  const [racketPositionState, setRacketPosition] = useState({
    x: 0,
    y: (GAME_FIELD_SIZE.height / 2) - (GAME_RACKET_SIZE.height / 2),
  });
  const [racketPositionEnemyState, setRacketPositionEnemy] = useState({
    x: 52,
    y: (GAME_FIELD_SIZE.height / 2) - (GAME_RACKET_SIZE.height / 2),
  });
  const [ballPositionState, setBallPosition] = useState(initialBallPosition);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [messages, setMessages] = useState<Array<string>>([]);
  const [isCreateRoom, setIsCreateRoom] = useState(false);
  const [roomHash, setRoomHash] = useState("");
  const [isEnemyConnected, setIsEnemyConnected] = useState(false);


  useEffect(() => {
    socket.on(SOCKET_GAME_COMMAND, ({ ball, rocket, score: scoreSocket }) => {
      rocket && setRacketPosition(rocket);
      ball && setBallPosition(ball);
      scoreSocket && setScore(scoreSocket);
    });

    socket.on(SOCKET_GAME_COMMAND_ENEMY, ({ rocket }) => {
      setRacketPositionEnemy(rocket);
    });

    socket.on(SOCKET_GAME_NEW_GAME_CREATED, ({ hash }) => {
      setIsCreateRoom(true);
      setRoomHash(hash);
      setMessages(state => ([
        ...state,
        `Game created: ${hash};`,
        "Waiting for Enemy;"
      ]));
    });

    socket.on(SOCKET_GAME_USER_CONNECTED, message => {
      setMessages(state => ([
        ...state,
        message,
        "GAME Starting"
      ]));

      setIsEnemyConnected(true);
      setIsGameStarted(true);
    })
  }, [socket]);


  useEffect(() => {
    document.addEventListener("keydown", e => {
      if (e.code === "ArrowUp") {
        if (isCreateRoom) {
          racketPosition = {
            ...racketPosition,
            y: racketPosition.y + 10,
          }
        } else {
          racketPositionEnemy = {
            ...racketPositionEnemy,
            y: racketPositionEnemy.y + 10,
          }
        }
      } else if (e.code === "ArrowDown") {
        if (isCreateRoom) {
          racketPosition = {
            ...racketPosition,
            y: racketPosition.y - 10,
          }
        } else {
          racketPositionEnemy = {
            ...racketPositionEnemy,
            y: racketPositionEnemy.y - 10,
          }
        }
      } else if (e.code === "Space") setIsGameStarted(state => !state);
    })
  }, [isCreateRoom]);

  useEffect(() => {
    if (!isGameStarted) return;

    if (!isCreateRoom) {
      const interval = setInterval(() => {
        socket.emit(SOCKET_GAME_COMMAND_ENEMY, {
          rocket: racketPositionEnemy,
          to: roomHash,
        });
      }, 100);

      return () => clearInterval(interval);
    }

    const interval = setInterval(() => {
      if (ballPosition.y + ballPosition.dy > 560 || ballPosition.y * 2 < 0) {
        ballPosition = {
          ...ballPosition,
          dy: -ballPosition.dy,
        };
      }
  
      const ballNextX = ballPosition.x + ballPosition.dx;
  
      if (ballNextX > 800) {
        if (ballPosition.y > racketPositionEnemy.y && ballPosition.y < (racketPositionEnemy.y + 150)) {
          ballPosition = {
            ...ballPosition,
            dx: -ballPosition.dx,
          }
        } else {
          // ballPosition = initialBallPosition
          // setIsGameStarted(false);
          ballPosition = {
            ...ballPosition,
            dx: -ballPosition.dx,
          }

          score = {
            ...score,
            myScore: score.myScore + 1,
          };
        }
      } else if (ballNextX < 0) {
        if (ballPosition.y > racketPosition.y && ballPosition.y < (racketPosition.y + 150)) {
          ballPosition = {
            ...ballPosition,
            dx: -ballPosition.dx,
          }
        } else {
          // ballPosition = initialBallPosition
          ballPosition = {
            ...ballPosition,
            dx: -ballPosition.dx,
          }
          // setIsGameStarted(false);
          score = {
            ...score,
            enemyScore: score.enemyScore + 1,
          };
        }
      }
  
      ballPosition = {
        ...ballPosition,
        x: ballPosition.x + ballPosition.dx,
        y: ballPosition.y + ballPosition.dy,
      };

      socket.emit(SOCKET_GAME_COMMAND, {
        ball: ballPosition,
        rocket: racketPosition,
        rocketEnemy: racketPositionEnemy,
        score,
        to: roomHash,
      });
    }, 100);

    return () => clearInterval(interval);
  }, [ballPosition, isGameStarted]);

  const onCreateRoom = () => {
    socket.emit(SOCKET_GAME_CREATE_NEW_GAME);
  }

  const onJoinRoom = () => {
    socket.emit(SOCKET_GAME_USER_CONNECTED, { game: roomHash });
  }


  return (<>
    <GameWrapperStyled>
      <ScoreBox>{`${scoreState.myScore} : ${scoreState.enemyScore}`}</ScoreBox>
      {
        !isGameStarted
          ? <PlayingFieldStyled>
            PAUSE
          </PlayingFieldStyled>
          : null
      }
      <motion.div
        style={{
          display: "inline-block",
          position: "absolute",
        }}
        animate={{
          x: racketPositionState.x,
          y: racketPositionState.y,
        }}
        transition={{ duration: ANIMATION_DURATION }}
      >
        <GameCaretStyled/>
      </motion.div>
      <motion.div
        style={{
          display: "inline-block",
          position: "absolute",
        }}
        animate={{
          x: ballPositionState.x,
          y: ballPositionState.y,
        }}
        transition={{ duration: ANIMATION_DURATION }}
      >
        <GameBallStyled/>
      </motion.div>
      <motion.div
        style={{
          display: "inline-block",
          position: "absolute",
          right: racketPositionEnemyState.x,
        }}
        animate={{
          x: `${racketPositionEnemyState.x}%`,
          y: racketPositionEnemyState.y,
        }}
        transition={{ duration: ANIMATION_DURATION }}
      >
        <GameCaretStyled/>
      </motion.div>
    </GameWrapperStyled>
    {
      !isEnemyConnected
        ? <GameControls>
          {
            isCreateRoom
              ? null
              : <>
                <GameSingleControl
                  onClick={onCreateRoom}
                >
                Create Game
                </GameSingleControl>
                <GameSingleControlWrapper>
                  <Input onChange={e => setRoomHash(e.target.value)}/>
                  <GameSingleControl
                    onClick={onJoinRoom}
                  >
                  Join Game
                  </GameSingleControl>
                </GameSingleControlWrapper>
              </>
          }
        </GameControls>
        : null
    }
    <GameActionsLogs>
      {
        messages.map((item, index) => (
          <li key={index}>{ item }</li>
        ))
      }
    </GameActionsLogs>
  </>);
}

export default GameWrapper;
