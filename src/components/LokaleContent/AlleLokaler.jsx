import image from "../img/room.jpg";

export default function AlleLokaler({ id, room, description, plug, sun, people, projector}) {


    const IconPlug = <iconify-icon icon="fluent:plug-disconnected-20-regular"></iconify-icon>
    const IconSun = <iconify-icon icon="akar-icons:sun"></iconify-icon>
    const IconPeople = <iconify-icon icon="cil:people"></iconify-icon>
    const IconProjector = <iconify-icon icon="fluent:video-28-regular"></iconify-icon>

    return (
       <>
      <div className="card">
        <div>
            <img className="image" src={image} alt="" />
        </div>
        <div className="cardText">
            <h2>{room}</h2>
            <h3>{description}</h3>
            <div className="list">
               <p><icon className="icon">{IconPlug}</icon>{plug}</p>
               <p><icon className="icon">{IconSun}</icon>{sun} </p>
               <p><icon className="icon">{IconPeople}</icon>{people}</p>
               <p> <icon className="icon">{IconProjector}</icon>{projector}</p>
            </div>
        </div>
        </div>
           

           </>

    

    )
}