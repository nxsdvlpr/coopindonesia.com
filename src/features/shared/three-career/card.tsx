import CardItem from './components/card-item'
import CardTitle from './components/card-title'

type ThreeCareerCardProps = {
  threeCareers: any
}

export default function ThreeCareerCard({
  threeCareers,
}: ThreeCareerCardProps) {
  if (!threeCareers) return null
  return (
    <div className="grid divide-y divide-gray-200 rounded-lg border border-gray-200 lg:hidden">
      {threeCareers.map((item: any, index: any) => (
        <div
          key={index}
          className={index === 1 ? 'bg-primary-25 px-6 py-8' : 'px-6 py-8'}
        >
          <CardTitle title={item.title} subtitle={item.subtitle} />
          <CardItem
            title={item.cost.title}
            price={item.cost.price}
            body={item.cost.desc}
          />
          <CardItem
            title={item.requirement.title}
            body={item.requirement.desc}
          />
          <CardItem title={item.periodic.title} body={item.periodic.desc} />
          <CardItem title={item.advantages.title} body={item.advantages.desc} />
          <CardItem title={item.weakness.title} body={item.weakness.desc} />
        </div>
      ))}
    </div>
  )
}
