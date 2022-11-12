import {  ChevronDownIcon } from "@chakra-ui/icons";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.heading}>
                <div className={styles.inner}>
                    <div className={styles.innerheading}>PRODUCT</div>
                    <div className={styles.block}>
                        <p className={styles.content}>Proposals</p>
                        <p className={styles.content}>Contracts</p>
                        <p className={styles.content}>Invoicing</p>
                        <p className={styles.content}>Client CRM</p>
                        <p className={styles.content}>Time Tracking</p>
                        <p className={styles.content}>Task Tracking</p>
                        <p className={styles.content}>Forms</p>
                        <p className={styles.content}>Accounting</p>
                        <p className={styles.content}>Bonsai Tax</p>
                        <p className={styles.content}>Bonsai Cash</p>
                    </div>
                    <div className={styles.block}>
                        <p className={styles.content}>Pricing</p>
                        <p className={styles.content}>Bonsai Reviews</p>
                    </div>
                </div>
                <div className={styles.inner}>
                    <div className={styles.innerheading}>FREE RESOURCES</div>
                    <div className={styles.block}>
                        <p className={styles.content}>Freelance Resources</p>
                        <p className={styles.content}>Freelance Blog by Bonsai</p>
                        <p className={styles.content}>How to Write a Contract</p>
                        <p className={styles.content}>Online Signature Maker</p>
                    </div>
                    <div className={styles.block}>
                        <p className={styles.content}>Self-Employed Taxes Hub</p>
                        <p className={styles.content}>Self-Employed Tax Calculator</p>
                        <p className={styles.content}>Self Employed Tax Deductions</p>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.temp}>Templates</div>
                        <span className={styles.content} >Invoice Templates<ChevronDownIcon w={8} h={8} /></span>
                        <span className={styles.content} >Proposals Templates<ChevronDownIcon w={8} h={8} /></span>
                        <span className={styles.content} >Contract Templates<ChevronDownIcon w={8} h={8} /></span>
                        <span className={styles.content} >Agreement Templates<ChevronDownIcon w={8} h={8} /></span>
                        <span className={styles.content} >Scope of Work Templates<ChevronDownIcon w={8} h={8} /></span>
                        <span className={styles.content} >Quote Templates<ChevronDownIcon w={8} h={8} /></span>
                        <span className={styles.content} >Credit Note Templates</span>
                        <span className={styles.content} >Estimate Templates</span>
                        <span className={styles.content} >Form Templates</span>
                    </div>
                </div>
                <div className={styles.inner}>
                    <div className={styles.innerheading}>BONSAI</div>
                    <div className={styles.block}>
                        <p className={styles.content}>About</p>
                        <p className={styles.content}>Careers</p>
                        <p className={styles.content}>Support</p>
                        <p className={styles.content}>LinkedIn</p>
                        <p className={styles.content}>Twitter</p>
                        <p className={styles.content}>Privacy Policy</p>
                        <p className={styles.content}>Legal</p>
                    </div>
                    <div className={styles.block}>
                        <p className={styles.content}>Affiliates</p>
                        <p className={styles.content}>Write for Us</p>
                    </div>

                    <span className={styles.content} >Comparisons<ChevronDownIcon w={8} h={8} /> </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;