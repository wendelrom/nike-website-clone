import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"

const Services = () => {
  return (
    <div className="max-container flex flex-center flex-wrap gap-16">
      {services.map(service => (
        <ServiceCard key={service.label} {...service}/>
      ))}
    </div>
  )
}

export default Services