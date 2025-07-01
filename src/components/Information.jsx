export default function Information({ title, informations }) {
  return (
    <div>
      <h2 className="font-bold text-light-gray-3">{title}</h2>
      {
        informations.map((item, index) => (
          <div key={index} className="flex flex-col">
            <a href={item.link} className="hover:text-primary hover:cursor-pointer hover:scale-105 hover:transition-colors">
              {item.text}
            </a>
          </div>
        ))
      }
    </div>
  );
}
