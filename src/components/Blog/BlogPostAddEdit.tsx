import { useEffect } from "react";
import { useFormik } from "formik";
import useSWR from "swr";
import { useRouter } from "next/router";
import Select, { StylesConfig } from "react-select";

// elements
import Input from "src/elements/Input";
import Button from "src/elements/Button/ButtonStyles";
import ChatInput from "src/components/ChatInput";

//components
import {
  BlogForm,
  BlogFormBtnGroup,
  BlogFormInputGroup,
  BlogSelectWrapper,
  BlogSelectLabel,
  BlogSelectLabelCreate
} from "src/components/Blog/BlogFormStyles";
import Modal from "src/components/Modal";

//layout
import MainLayout from "src/layouts/MainLayout";

// types
import { SingleCategoryTagInterface } from "../../../src/types/api/tagCategories";
import { BlogPostFormInterface, BlogPostCreateInterface } from "src/types/api/post";

//helpers
import posts, { postsUrls } from "src/helpers/api/posts";
import { categoriesUrls } from "src/helpers/api/categories";
import { tagsUrls } from "src/helpers/api/tags";
import { openCreateModal } from "src/components/Modals/CreateCategory";
import { openCreateTagModal } from "src/components/Modals/CreateTag";


const selectStyles: StylesConfig<any, any> = {
  container: (styles) => ({ ...styles, width: "100%", flex: "0 0 auto" }),
}

function BlogPostAddEdit() {
  const router = useRouter();

  const { blogId } = router.query;

  const onSubmit = (data: BlogPostFormInterface) => {
    const dataToStore: BlogPostCreateInterface = {
      ...data,
      tags: data.tags.map(item => item.value),
      categories: data.categories.map(item => item.value),
    };

    !blogId
      ? posts.postPostBlog(dataToStore)
      : posts.patchSinglePosts(+blogId, dataToStore);
  }

  const { handleSubmit, handleChange, setFieldValue, values, setValues } = useFormik({
    initialValues: {
      tags: [],
      categories: [],
      body: "",
      title: "",
    },
    onSubmit: onSubmit,
  });

  const {
    data: post
  } = useSWR(blogId ? `${postsUrls.getPosts}/${blogId}` : null);

  const {
    data: categories,
    mutate: mutateCategories
  } = useSWR(categoriesUrls.getCategories, { fallbackData: [], });
  const {
    data: tags,
    mutate: mutateTags,
  } = useSWR(tagsUrls.getTags, { fallbackData: [], });

  useEffect(() => {
    if (!post) return;

    const categoriesOptions = post.categories
      ?.map((category: SingleCategoryTagInterface) => ({ value: category.id, label: category.name }));
    const tagOptions = post.tags
      ?.map((tag: SingleCategoryTagInterface) => ({ value: tag.id, label: tag.name }));

    setValues({
      tags: tagOptions,
      categories: categoriesOptions,
      body: post.body,
      title: post.title,
    });
  }, [post]);

  const categoriesOptions = categories
    ?.map((category: SingleCategoryTagInterface) => ({ value: category.id, label: category.name }));
  const tagOptions = tags
    ?.map((tag: SingleCategoryTagInterface) => ({ value: tag.id, label: tag.name }));


  return (<>
    <MainLayout>
      <BlogForm onSubmit={handleSubmit}>
        <BlogFormInputGroup>
          <Input
            name="title"
            label="Title"
            placeholder="Blog Title"
            onChange={handleChange}
            defaultValue={values.title}
          />
          <BlogSelectWrapper>
            <BlogSelectLabel>
              <span>Select category |</span>
              <BlogSelectLabelCreate
                onClick={() => openCreateModal({ onConfirm: mutateCategories })}
              >
                create new
              </BlogSelectLabelCreate>
            </BlogSelectLabel>
            <Select
              options={categoriesOptions}
              styles={selectStyles}
              value={values.categories}
              onChange={e => setFieldValue("categories", e)}
              isMulti
            />
          </BlogSelectWrapper>
          <BlogSelectWrapper>
            <BlogSelectLabel>
              <span>Select tag |</span>
              <BlogSelectLabelCreate
                onClick={() => openCreateTagModal({ onConfirm: mutateTags })}
              >
                create new
              </BlogSelectLabelCreate>
            </BlogSelectLabel>
            <Select
              value={values.tags}
              options={tagOptions}
              styles={selectStyles}
              onChange={e => setFieldValue("tags", e)}
              isMulti
            />
          </BlogSelectWrapper>
        </BlogFormInputGroup>
        <ChatInput
          showSendIcon={false}
          value={values.body}
          onChange={e => setFieldValue("body", e)}
        />
        <BlogFormBtnGroup>
          <Button htmlType="submit">
            { !blogId ? "Create" : "Update" }
          </Button>
          <Button danger>
            Delete
          </Button>
        </BlogFormBtnGroup>
      </BlogForm>
    </MainLayout>
    <Modal/>
  </>);
}


export default BlogPostAddEdit;
