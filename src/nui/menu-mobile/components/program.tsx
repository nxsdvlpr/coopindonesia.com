import Card from './card'
import MenuProgramBusiness from './program/business'
import MenuProgramInternship from './program/internship'
import MenuProgramStudentInternship from './program/student-internship'

type MenuProgramProps = {
  onClose: () => void
}

export default function MenuProgram({ onClose }: MenuProgramProps) {
  return (
    <Card title="PROGRAMS">
      <MenuProgramInternship onclose={onClose} />
      <MenuProgramStudentInternship onclose={onClose} />
      <MenuProgramBusiness onclose={onClose} />
    </Card>
  )
}
