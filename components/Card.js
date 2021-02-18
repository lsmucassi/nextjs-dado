import Image from "next/image";

export default function Card() {
    return(
        <>
            <div className={Styles.card_wrap} >
                <div className={styles.card_item} >
                    <dic className={styles.card_inner}>
                        <div className={styles.card_img} >
                        <Image  src="/images/profiles/pp-1.jpg" alt="me" width="64" height="64" />
                        </div>
                        <div className={styles.pet_name}>Scooby Doo</div>
                        <div className={styles.pet_role}>Jumper this one</div>
                        <a href
                    </dic>
                </div>
            </div>
        </>
    )
}