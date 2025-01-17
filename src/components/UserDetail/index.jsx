import { useSelector } from 'react-redux';

const UserDetail = ({}) => {
    const user = useSelector(state => state.user);
    const { id, name, email, age, gender, profileImg } = user;
    return(
        <div className='flex flex-col items-center'>
            <img
                className='rounded-full'
                width={100}
                height={100}
                src={profileImg}
                alt="User Profile"
            />
            <div className='flex'>
                <p>{name}</p>
                <p>({age}</p>
                <p>{gender == 'MALE' ? 'M' : 'F'})</p>
            </div>
            <p>{email}</p>
        </div>
    )
}

export default UserDetail;