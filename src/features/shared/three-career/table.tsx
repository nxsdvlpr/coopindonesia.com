import { threeCareersDataStatic } from '@/app/api/three-career'
import {
  Markdown,
  Table,
  TableBodyCell,
  TableHead,
  TableHeadCell,
  Typo,
} from '@/nui'

export default function ThreeCareerTable() {
  const threeCareers = threeCareersDataStatic

  const renderTableCells = (data: any) => {
    return data.map((item: any, idx: number) => (
      <TableBodyCell background={idx === 1} key={idx}>
        <Markdown size="lg" variant="table">
          {item.desc}
        </Markdown>
      </TableBodyCell>
    ))
  }

  return (
    <div className="hidden lg:block">
      <Table>
        <TableHead>
          <TableHeadCell />
          {threeCareers.map((career, index) => (
            <TableHeadCell
              key={index}
              title={career.title}
              background={index === 1}
            >
              {career.subtitle}
            </TableHeadCell>
          ))}
        </TableHead>
        <tbody>
          <tr>
            <TableBodyCell>
              <Typo size="lg" fontWeight="bold" color="gray-900">
                {threeCareers[0].cost.title}
              </Typo>
            </TableBodyCell>
            {renderTableCells(threeCareers.map((career) => career.cost))}
          </tr>
          <tr>
            <TableBodyCell>
              <Typo size="lg" fontWeight="bold" color="gray-900">
                {threeCareers[0].requirement.title}
              </Typo>
            </TableBodyCell>
            {renderTableCells(threeCareers.map((career) => career.requirement))}
          </tr>
          <tr>
            <TableBodyCell>
              <Typo size="lg" fontWeight="bold" color="gray-900">
                {threeCareers[0].periodic.title}
              </Typo>
            </TableBodyCell>
            {renderTableCells(threeCareers.map((career) => career.periodic))}
          </tr>
          <tr>
            <TableBodyCell>
              <Typo size="lg" fontWeight="bold" color="gray-900">
                {threeCareers[0].advantages.title}
              </Typo>
            </TableBodyCell>
            {renderTableCells(threeCareers.map((career) => career.advantages))}
          </tr>
          <tr>
            <TableBodyCell>
              <Typo size="lg" fontWeight="bold" color="gray-900">
                {threeCareers[0].weakness.title}
              </Typo>
            </TableBodyCell>
            {renderTableCells(threeCareers.map((career) => career.weakness))}
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
