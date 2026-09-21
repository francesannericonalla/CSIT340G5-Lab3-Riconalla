const Header = (props) => (
  <h1>{props.course}</h1>
)

const Content = (props) => (
  <div>
    <p>{props.part1} - {props.units1} units</p>
    <p>{props.part2} - {props.units2} units</p>
    <p>{props.part3} - {props.units3} units</p>
  </div>
)

const Total = (props) => (
  <p>
    Total {props.units1 + props.units2 + props.units3} units
  </p>
)

const Footer = (props) => (
  <footer>
    {props.name} - {props.courseCode} - {props.section}
  </footer>
)

const App = () => {
  const course = 'Technopreneurship'

  const part1 = 'Industry Elective 1'
  const units1 = 3

  const part2 = 'Industry Elective 2'
  const units2 = 3

  const part3 = 'Industry Elective 3'
  const units3 = 3

  const studentName = 'Frances Anne B. Riconalla'
  const courseCode = 'CSIT340'
  const section = 'G5'

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        units1={units1}
        part2={part2}
        units2={units2}
        part3={part3}
        units3={units3}
      />
      <Total
        units1={units1}
        units2={units2}
        units3={units3}
      />
      <Footer
        name={studentName}
        courseCode={courseCode}
        section={section}
      />
    </div>
  )
}

export default App