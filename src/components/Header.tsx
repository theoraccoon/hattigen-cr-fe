interface HeaderProps {
  title: string;
  description: string;
  clicked: boolean;
  onclick: () => void;    
}

const Header = ({title, description, clicked, onclick}: HeaderProps) => {
  const isEdit = clicked;
return (
  <div className="flex justify-between w-full">
      <div className='flex flex-col justify-center items-start gap-1'>
      <h1 className="text-4xl font-semibold">{title}</h1>
      <p className="font-[400px] text-base">
          {description}
      </p>
      </div>
      <div className="flex justify-center items-center">
          <button className="bg-black text-white w-[120px] h-[50px] rounded-full font-semibold" type="button" onClick={onclick}>{isEdit ? "Done" : "Edit"}</button>
      </div>
  </div>
)
}

export default Header
