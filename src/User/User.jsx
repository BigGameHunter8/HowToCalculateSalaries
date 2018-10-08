import React, { Component } from 'react';
import './User.css';

class User extends Component {

    constructor(props) {
        super(props);
        // console.log(typeof parseInt(this.props.copiii));
    }

    cas = 0.06;
    cam = 0.045;
    impos_pe_venit = 0.12;

    scurt_total = [];

    scutire = {
        "scutire_personala": 2000,
        "scutire_personala_majorata": 2500,
        "scutire_sotiei": 940,
        "scutire_sotiei_majorata": 1500
    };

    getCas(salary) {
        return salary * this.cas;
    }

    getCam(salary) {
        return salary * this.cam;
    }

    CAS = this.getCas(this.props.salary);
    CAM = this.getCam(this.props.salary);

    getCopiii(quantity) {
        return quantity * 250;
    }

    totalik;
    getScutiri() {
        if (this.props.scutire_personala === "yes") {
            this.scurt_total.push(this.scutire.scutire_personala);
        }

        if (this.props.scutire_personala === "no") {
            this.scurt_total.push(0);
        }

        if (this.props.scutire_personala_majorata === "yes") {
            this.scurt_total.push(this.scutire.scutire_personala_majorata);
        }

        if (this.props.scutire_personala_majorata === "no") {
            this.scurt_total.push(0);
        }

        if (this.props.scutire_sotiei === "yes") {
            this.scurt_total.push(this.scutire.scutire_sotiei);
        }

        if (this.props.scutire_sotiei === "no") {
            this.scurt_total.push(0);
        }

        if (this.props.scutire_sotiei_majorata === "yes") {
            this.scurt_total.push(this.scutire.scutire_sotiei_majorata);
        }

        if (this.props.scutire_sotiei_majorata === "no") {
            this.scurt_total.push(0);
        }

        this.scurt_total.push(parseInt(this.getCopiii(this.props.copiii)));

        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        //console.log(typeof (this.scurt_total.reduce(reducer)));
        return parseInt(this.scurt_total.reduce(reducer));
    }

    // priceCopiii = parseInt(this.props.copiii);

    // copiii = this.getCopiii(parseInt(this.props.copiii));

    getSalary() {
        // let imposit = (this.props.salary - this.getScutiri());
        // let temp = this.props.salary - this.CAS - this.CAM - imposit;
        // console.log(this.props.salary);
        // console.log(this.getScutiri());
        // return imposit;
    }



    render() {
        return (
            <div className="User">
                <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.salary}</td>
                    <td>{this.CAS}</td>
                    <td>{this.CAM}</td>
                    <td>{this.props.scutire_personala === "yes" ? this.scutire.scutire_personala : 0}</td>
                    <td>{this.props.scutire_personala_majorata === "yes" ? this.scutire.scutire_personala_majorata : 0}</td>
                    <td>{this.props.scutire_sotiei === "yes" ? this.scutire.scutire_sotiei : 0}</td>
                    <td>{this.props.scutire_sotiei_majorata === "yes" ? this.scutire.scutire_sotiei_majorata : 0}</td>
                    <td>{this.props.copiii}</td>
                    <td>{this.getScutiri()}</td>
                    <td>
                        <p>{this.getSalary()}</p>
                    </td>
                </tr>
            </div>
        );
    }
}

export default User;
