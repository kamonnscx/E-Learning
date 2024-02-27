import styles from'@/styles/cardstyle.module.css';
import Card from './cd'
import {CSSTransition} from 'react-transition-group';
import {useState} from 'react';

function FlippableCard() {
    const [showFront, setShowFront] = useState(true);
    return(
        <div className={styles.flippablecardcontainer}>
            <CSSTransition
                in={showFront}
                timeout={300}
                classNames={styles.flip}
            >
                <Card onClick={() => {
                    setShowFront((v) => !v);
                }}/>
            </CSSTransition>
        </div>
    );
}

export default FlippableCard;