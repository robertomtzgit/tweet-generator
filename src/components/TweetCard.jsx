import styles from '../styles/Card.module.css'

import Verified from './icons/Verified'
import Comments from './icons/Comments'
import Retwit from './icons/Retwit'
import Likes from './icons/Likes'
import Share from './icons/Share'
import userImage from './icons/UserImage'

import { addLinks } from '../helpers/addLinks'
import { useState } from 'react'
import { blobToData } from '../helpers/blobToData'
import UserImage from './icons/UserImage'


const TweetCard = () => {
    const paragraph = "This is a sample tweet. @mentions, #hashtags, https://links.com are all automatically converted.";

    const [avatar, setAvatar] = useState();
    const [name, setName] = useState("Carlos");
    const [username, setUsername] = useState("@carlos25");
    const [verified, setVerified] = useState(true);
    const [image, setImage] = useState();

    const uploadAvatar = async e => {
        const objAvatar = e.target.files[0];
        setAvatar(await blobToData(objAvatar))
    }
    const uploadImage = async e => {
        const objAvatar = e.target.files[0];
        setImage(await blobToData(objAvatar))
    }
    
    return (
        <>
        <div className={styles.hero}>
            <section className={styles.twitCard}>
                <picture className={styles.userImage}>
                    { avatar ? <img src={avatar} alt="avatar" /> : <UserImage/> }
                    
                </picture>
                <div className={styles.content}>
                    <header>
                        <div>
                            <h3>{name}</h3>
                            { verified && <Verified/> }
                            <p>{username} • 2h</p>
                        </div>
                    </header>
                    <p dangerouslySetInnerHTML={{__html:addLinks(paragraph) }}></p>
                    {
                        image && 
                        <div className={styles.images}>
                            <img src={image} alt="tweet image" />
                        </div>
                    }
                    <footer>
                        <div>
                            <Comments/>
                            <span>34</span>
                        </div>
                        <div>
                            <Retwit/>
                            <span>34</span>
                        </div>
                        <div>
                            <Likes/>
                            <span>34</span>
                        </div>
                        <div>
                            <Share/>
                        </div>
                    </footer>
                </div>
            </section>
        </div>
        <div className={styles.formInputs}>
            <div className={styles.container}>
                <form >
                    <span>
                        <label>Avatar</label>
                        <input type="file" onChange={uploadAvatar} accept=".png, .jpg, .svg"/>
                    </span>
                    <span>
                        <label>Name</label>
                        <input type="text" onChange={e=>setName(e.target.value)} value={name}/>
                    </span>
                    <span>
                        <label>Username</label>
                        <input type="text" onChange={e=>setUsername(e.target.value)} value={username}/>
                    </span>
                    <span>
                        <label>Tweet date</label>
                        <input type="datetime-local" />
                    </span>
                    <span>
                        <label>Tweet image</label>
                        <input type="file" onChange={uploadImage} accept=".png, .jpg, .svg"/>
                    </span>
                    <span>
                        <button type='button' 
                            onClick={()=>setVerified(current=>!current)}
                            className={verified ? styles.btnVerified : ""}
                        >Verified
                        </button>
                    </span>
                    <span>
                        <label>Content:</label>
                        <textarea cols="30" rows="5"></textarea>
                    </span>
                    <div>
                        <span>
                            <label>Comments:</label>
                            <input type="number" />
                        </span>
                        <span>
                            <label>Retweet:</label>
                            <input type="number" />
                        </span>
                        <span>
                            <label>Likes:</label>
                            <input type="number" />
                        </span>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}

export default TweetCard;