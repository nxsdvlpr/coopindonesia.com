import { threeCareersDataStatic } from '@/app/[locale]/api/three-career'
import {
  Markdown,
  Table,
  TableBodyCell,
  TableHead,
  TableHeadCell,
  Typo,
} from '@/nui'
import { useTranslations } from 'next-intl'

export default function ThreeCareerTable() {
  const t = useTranslations()
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
          {t
            .raw('sharedContent.threeCareer.lists')
            .map((list: any, index: number) => (
              <TableHeadCell
                key={index}
                title={list.title}
                background={index === 1}
              >
                {list.subtitle}
              </TableHeadCell>
            ))}
        </TableHead>
        <tbody>
          <tr>
            <TableBodyCell>
              <Typo size="lg" fontWeight="bold" color="gray-900">
                {t.raw('sharedContent.threeCareer.lists')[0].cost.title}
              </Typo>
            </TableBodyCell>
            {renderTableCells(
              t
                .raw('sharedContent.threeCareer.lists')
                .map((list: any) => list.cost)
            )}
          </tr>
          <tr>
            <TableBodyCell>
              <Typo size="lg" fontWeight="bold" color="gray-900">
                {t.raw('sharedContent.threeCareer.lists')[0].requirement.title}
              </Typo>
            </TableBodyCell>
            {renderTableCells(
              t
                .raw('sharedContent.threeCareer.lists')
                .map((list: any) => list.requirement)
            )}
          </tr>
          <tr>
            <TableBodyCell>
              <Typo size="lg" fontWeight="bold" color="gray-900">
                {t.raw('sharedContent.threeCareer.lists')[0].periodic.title}
              </Typo>
            </TableBodyCell>
            {renderTableCells(
              t
                .raw('sharedContent.threeCareer.lists')
                .map((list: any) => list.periodic)
            )}
          </tr>
          <tr>
            <TableBodyCell>
              <Typo size="lg" fontWeight="bold" color="gray-900">
                {t.raw('sharedContent.threeCareer.lists')[0].advantages.title}
              </Typo>
            </TableBodyCell>
            {renderTableCells(
              t
                .raw('sharedContent.threeCareer.lists')
                .map((list: any) => list.advantages)
            )}
          </tr>
          <tr>
            <TableBodyCell>
              <Typo size="lg" fontWeight="bold" color="gray-900">
                {t.raw('sharedContent.threeCareer.lists')[0].weakness.title}
              </Typo>
            </TableBodyCell>
            {renderTableCells(
              t
                .raw('sharedContent.threeCareer.lists')
                .map((list: any) => list.weakness)
            )}
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
