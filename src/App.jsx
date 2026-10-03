const Header = (props) => (
  <h1>{props.course}</h1>
)

const Part = (props) => (
  <p>{props.part.name} - {props.part.units} units</p>
)

const Content = (props) => (
  <div>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
  </div>
)

const Total = (props) => (
  <p>
    Total {props.parts[0].units + props.parts[1].units + props.parts[2].units} units
  </p>
)

const Footer = (props) => (
  <footer>
    {props.name} - {props.courseCode} - {props.section}
  </footer>
)

const App = () => {
  const course = 'Technopreneurship'

  const parts = [
    {
      name: 'Industry Elective 1',
      units: 3
    },
    {
      name: 'Industry Elective 2',
      units: 3
    },
    {
      name: 'Industry Elective 3',
      units: 3
    }
  ]

  const studentName = 'Frances Anne B. Riconalla'
  const courseCode = 'CSIT340'
  const section = 'G5'

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer
        name={studentName}
        courseCode={courseCode}
        section={section}
      />
    </div>
  )
}

export default App
