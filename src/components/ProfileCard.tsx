import './ProfileCard.css'

type ProfileCardProps = {
  name: string
  role: string
}


function ProfileCard({ name, role }: ProfileCardProps) {
  return (
    <div className="card">
      {/* 3) 중괄호 {} 안에 변수를 넣으면 값이 화면에 표시됨 */}
      <h2 className="card-name">{name}</h2>
      <p className="card-role">{role}</p>
    </div>
  )
}

export default ProfileCard