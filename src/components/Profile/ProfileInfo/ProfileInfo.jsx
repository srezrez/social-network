import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusHooks from './ProfileStatusHooks';
import userPhoto from '../../../assets/images/user.png'

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            {/* <div>
                <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
            </div> */}
            <div className={s.descBlock}>
                <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto}/>
                <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus}/>
                {/* <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div> */}
            </div>
        </div>
    );
}

export default ProfileInfo;