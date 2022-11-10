import {  ChevronDownIcon } from "@chakra-ui/icons";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.heading}>
                <div className={styles.inner}>
                    <h4 className={styles.innerheading}>PRODUCTS</h4>
                    <p className={styles.content}>Proposals</p>
                    <p className={styles.content}>Contacts</p>
                    <p className={styles.content}>Invoiceing</p>
                    <p className={styles.content}>Clint CRM</p>
                    <p className={styles.content}>Time Tracking</p>
                    <p className={styles.content}>Task Tracking</p>
                    <p className={styles.content}>From</p>
                    <p className={styles.content}>Accounting</p>
                    <br/>
                  
                    <p className={styles.content}>Price</p>
                    <p className={styles.content}>Bonsai Review</p>
                </div>
                <div className={styles.inner}>
                    <h4 className={styles.innerheading}>FREE RESOURCES</h4>
                    <p className={styles.content}>Freelance Resources</p>
                    <p className={styles.content}>Freelance Blog by Bonsai</p>
                    <br/>
                    <p className={styles.content}>Self Employed Taxes hub</p>
                    <p className={styles.content}>Self Employed Taxes hub</p>
                    <p className={styles.content}>Self Employed Tax alculator</p>
                    
                    <br/>
                    <h4 className={styles.temp}>Templete</h4>
                    <span className={styles.content} >Invoice Templates<ChevronDownIcon w={8} h={8} /></span>
                    <br/>
                    <span className={styles.content} >Proposals Templates<ChevronDownIcon w={8} h={8} /></span>
                    <br/>
                    <span className={styles.content} >Contacts Templates<ChevronDownIcon w={8} h={8} /></span>
                    <br/>
                    <span className={styles.content} >Agreement Templates<ChevronDownIcon w={8} h={8} /></span>
                    <br/>
                    <span className={styles.content} >Scope of Work Templates<ChevronDownIcon w={8} h={8} /></span>

                </div>
                <div className={styles.inner}>
                    <h4 className={styles.innerheading}>BONSAI</h4>
                    <p className={styles.content}>Careers</p>
                    <p className={styles.content}>Support</p>
                    <p className={styles.content}>Linkdin</p>
                    <p className={styles.content}>Twitter</p>
                    <p className={styles.content}>Privacy Policy</p>
                    <p className={styles.content}>Legal</p>
                    <p className={styles.content}>From</p>
                    <p className={styles.content}>Accounting</p>
                    <br/>
                    <p className={styles.content}>Affiliates</p>
                    <p className={styles.content}>Write for Us</p>
                    <br/>
                    <span className={styles.content} >Comparisons<ChevronDownIcon w={8} h={8} /> </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;