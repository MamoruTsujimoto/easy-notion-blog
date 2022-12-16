//import { parseISO, format } from 'date-fns'

type Props = {
  dateString: string
}

const Date = ({ dateString }: Props) => {
  //const date = parseISO(dateString)
  console.log(dateString)
  return <span>{dateString}</span>
}

export default Date
