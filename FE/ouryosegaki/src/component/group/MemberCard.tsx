import '../../styles/components/group/member-card.css'

function MemberCard(props :{memberId:number, name: string}){
    return(
        <div className='card-member'>
            {props.name}
        </div>
    )
}

export default MemberCard