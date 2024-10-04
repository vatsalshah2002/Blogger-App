import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation, useQuery } from '@tanstack/react-query';
import { updatePostAPI, fetchPost } from '../../../APIServices/posts/postApi';
import { useParams } from 'react-router-dom';

const UpdatePost = () => {
  const { postId } = useParams();

  const { data } = useQuery({
    queryKey: ["post-details"],
    queryFn: () => fetchPost(postId),
    onError: (err) => {
      console.log("Error fetching posts:", err.message);
    },
    onSuccess: (data) => {
      console.log("Posts fetched successfully:", data);
    },
  });

  const postMutation = useMutation({
    mutationKey: ["update-post"],
    mutationFn: updatePostAPI,
  })

  const formik = useFormik({
    initialValues: {
      title: data?.postFound?.title || "",
      description: data?.postFound?.description || "",
    },

    enableReinitialize: true,

    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
    }),

    onSubmit: (values) => {
      const postData = {
        title: values.title,
        description: values.description,
        postId
      }
      postMutation.mutate(postData);
    }
  });

  const isLoading = postMutation.isPending;
  //isErr
  const isError = postMutation.isError;
  //success
  const isSuccess = postMutation.isSuccess;
  //Error
  const error = postMutation.error;


  return (
    <div>
      <h1> You are editing -{data?.postFound.title}</h1>
      <div>
        {isLoading && <p>Loading...</p>}
        {isSuccess && !isError && <p>Post updated successfully</p>}
        {isError && <p>{error.message}</p>}
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Enter Title"
            {...formik.getFieldProps("title")}
          />
          {/* display err msg */}
          {formik.touched.title && formik.errors.title && (
            <span style={{ color: "red" }}>{formik.errors.title}</span>
          )}
          <input
            type="text"
            name="description"
            placeholder="Enter description"
            {...formik.getFieldProps("description")}
          />
          {/* display err msg */}
          {formik.touched.description && formik.errors.description && (
            <span style={{ color: "red" }}>{formik.errors.description}</span>
          )}
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  )
}

export default UpdatePost