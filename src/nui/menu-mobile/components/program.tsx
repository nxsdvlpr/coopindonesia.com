import Card from './card'
import MenuProgramBusiness from './program/business'
import MenuProgramInternship from './program/internship'
import MenuProgramSchool from './program/school'

type MenuProgramProps = {
  onClose: () => void
}

export default function MenuProgram({ onClose }: MenuProgramProps) {
  return (
    <Card title="PROGRAMS">
      <MenuProgramInternship onclose={onClose} />
      <MenuProgramSchool onclose={onClose} />
      <MenuProgramBusiness onclose={onClose} />
    </Card>
  )
}
