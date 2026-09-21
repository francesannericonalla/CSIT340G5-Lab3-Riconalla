const Header = (props) => (
  <h1>{props.course}</h1>
)

const Part = (props) => (
  <p>{props.part.name} - {props.part.units} units</p>
)

const Content = (props) => (
  <div>
    <Part part={props.part1} />
    <Part part={props.part2} />
    <Part part={props.part3} />
  </div>
)

const Total = (props) => (
  <p>
    Total {props.part1.units + props.part2.units + props.part3.units} units
  </p>
)

const Footer = (props) => (
  <footer>
    {props.name} - {props.courseCode} - {props.section}
  </footer>
)

const App = () => {
  const course = 'Technopreneurship'

  const part1 = {
    name: 'Industry Elective 1',
    units: 3
  }

  const part2 = {
    name: 'Industry Elective 2',
    units: 3
  }

  const part3 = {
    name: 'Industry Elective 3',
    units: 3
  }

  const studentName = 'Frances Anne B. Riconalla'
  const courseCode = 'CSIT340'
  const section = 'G5'

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />
      <Total
        part1={part1}
        part2={part2}
        part3={part3}
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