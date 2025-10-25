import '../styles/containers/main-containers.css'
import SearchBox from '../component/main/main/SearchBox'
import MainActionButton from '../component/main/MainActionButton'
import GroupListTable from '../component/main/main/GroupListTable'

function MainContainer(){
    return(
        <div>
            <SearchBox></SearchBox>
            <MainActionButton name="search"></MainActionButton>
            <GroupListTable title="group number">
            </GroupListTable>
            <GroupListTable title="group name"></GroupListTable>
        </div>
    )
}

export default MainContainer