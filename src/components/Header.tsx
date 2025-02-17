
interface HeaderProps {
    title: string;
    description: string;
}

const Header = ({title, description}: HeaderProps) => {
  return (
    <div className='flex flex-col justify-center items-center '>
      <h1>{title}</h1>
      <p>
        {description}``
      </p>
    </div>
  )
}

export default Header
