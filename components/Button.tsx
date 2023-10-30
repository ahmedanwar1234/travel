import Image from "next/image";

type ButtonProps={
    type:'button'|'submit';
    title:string;
    icon?:string;
    variant?:string
}

const Button = ({title,type,icon,variant}:ButtonProps) => {
  return (
    <button className={` flexCenter gap-3 rounded-full border  ${variant}`} type={type}>
        {icon && <Image src={icon} alt="icon" width={24} height={24}/>}
<label className=" bold-16 whitespace-nowrap">{title}
</label>    </button>
  )
}

export default Button