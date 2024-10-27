export default function Post({ post }) {
    const { title, body } = post;
    return (
        <div className='post'>
            <p className="postHeader">{title}</p>
            <p className='postBody'>{body}</p>
        </div>
    )
}
