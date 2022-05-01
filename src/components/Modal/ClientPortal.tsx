import { useRef, useEffect, useState } from "react"
import { createPortal } from "react-dom";

// types
import { ClientPortalInterface } from "../../types/components/ClientPortal";


function ClientPortal({ children, selector = "#modal" }: ClientPortalInterface) {
  const ref = useRef<Element|null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector(selector)
    setMounted(true)
  }, [selector])

  return mounted && ref.current ? createPortal(children, ref.current) : null
}

export default ClientPortal;
