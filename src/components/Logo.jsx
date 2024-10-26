import image from '../assets/fake-blog.png'

export default function Logo() {
    return (
        <div className='logo'>
            <img src={image} alt="Logo" />
            <h1>The Faker Blog</h1>
        </div>
    )
}
