import { parseISO, format } from 'date-fns'

type Props = {
  dateString: string
}

const Date = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  return <span>{format(date, 'LLLL	d, yyyy')}</span>
}

export default Date
