import "./UsersFooter.css"

import Pagination from '@material-ui/lab/Pagination';

export const UsersFooter = (props) => {
  return (
    <div className={"users-footer"}>
      <Pagination count={10} />
    </div>
  )
}