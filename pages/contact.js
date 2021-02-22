import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// dummy contact page
export default function Contact() {
    return(
        <>
            <Navbar />
            <main className={styles.main}>
                
                <h4 className={styles.title}>
                    hoof hoof at us
                </h4>
                <div className="bg_img"></div>
                    <div className="form_wrapper">
                    <div className="form_container">
                        <form>
                        <div className="row clearfix">
                            <div className="col_half">
                            <label>First name</label>
                            <div className="input_field"> 
                                <input type="text" name="first_name" placeholder="Scooby" required />
                            </div>
                            </div>
                            <div className="col_half">
                            <label>Last name</label>
                            <div className="input_field">
                                <input type="text" name="last_name" placeholder="Doo" />
                            </div>
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col_half">
                            <label>Email</label>
                            <div className="input_field"> 
                                <input type="email" name="email" placeholder="petti@dogo.com" required />
                            </div>
                            </div>
                            <div className="col_half">
                            <label>Phone</label>
                            <div className="input_field"> 
                                <input type="tel" name="phone" placeholder="Phone no" pattern="[0-9]{10}" />
                            </div>
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div>
                            <label>Comments</label>
                            <div className="textarea_field"> 
                                <textarea cols="46" rows="3" name="comments"></textarea>
                            </div>
                            </div>
                        </div>
                        <input className="button" type="submit" value="Sumbit" />
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
