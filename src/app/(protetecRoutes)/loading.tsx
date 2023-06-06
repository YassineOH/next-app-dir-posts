import LoadingPost from '~/components/LoadingPost';

function Loading() {
  return (
    <div className='mx-auto my-3 grid  w-11/12 grid-cols-1  items-start gap-4 text-left md:w-full md:grid-cols-2 lg:grid-cols-3'>
      <LoadingPost />
      <LoadingPost />
      <LoadingPost />
      <LoadingPost />
      <LoadingPost />
    </div>
  );
}
export default Loading;
