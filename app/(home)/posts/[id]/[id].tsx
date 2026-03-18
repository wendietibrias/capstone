interface PostDetailPageProps {
   params: Promise<{
     id: number;
   }>
}

const PostDetail = async ({ params }: PostDetailPageProps) => {
  /** catch one segment */
    const { id } = await params;

    /** catch all segments of params */
    const paramValues = await params;

    return (
        <>
          <h1>This is detial Post for post with id : {id} / {paramValues.id}</h1>
        </>
    )
}

export default PostDetail;