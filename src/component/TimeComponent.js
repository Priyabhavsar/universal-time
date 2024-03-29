import { Card, CardBody, Form } from "react-bootstrap";
import { LanguageContext } from "../context";
import { useCallback, useContext, useEffect, useState } from "react";
import moment from "moment-timezone";
function TimeComponent() {
    let { allLanguage, language } = useContext(LanguageContext);
    let [timeZoneList, setTimezoneList] = useState([
        { country: "", timezone: [] },
    ]);
    let [selectedTime, setSelectedTime] = useState("");

    const letTimeZoneFromCountry = useCallback(async () => {
        await allLanguage.forEach((x) => {
            if (x.language === language) {
                let list = moment.tz.zonesForCountry(x.country);
                setTimezoneList({
                    country: x.fullName,
                    timezone: list,
                });
                setSelectedTime(list[0]);
            }
        });
    }, [language, allLanguage]);

    const DisplayTime = useCallback(() => {
        return selectedTime ? (
            <div>
                {new Intl.DateTimeFormat(language, {
                    dateStyle: "full",
                    timeStyle: "long",
                    timeZone: selectedTime,
                }).format(new Date())}
            </div>
        ) : (
            <></>
        );
    }, [language, selectedTime]);

    useEffect(() => {
        letTimeZoneFromCountry();
    }, [language, letTimeZoneFromCountry]);

    return (
        <div className="mt-4">
            <Card className="center-card" bg="dark" text="white">
                <Card.Header className="text-center text-lg">
                    <b>
                        Please Select time zone for getting specific time of
                        selected time Zone.
                    </b>
                </Card.Header>
                <CardBody>
                    <div className="row">
                        <div className="col-md-4 col-sm-12">Country : </div>
                        <div className="col-md-8 col-sm-12">
                            {timeZoneList.country}
                        </div>
                    </div>
                </CardBody>
                <CardBody>
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            Select Time Zone :{" "}
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <Form className="d-flex">
                                <Form.Select
                                    aria-label="Select Language"
                                    onChange={(e) =>
                                        setSelectedTime(e.target.value)
                                    }
                                    value={selectedTime}
                                >
                                    {timeZoneList.timezone &&
                                        timeZoneList.timezone.map((x, i) => (
                                            <option value={x} key={i}>
                                                {x}
                                            </option>
                                        ))}
                                </Form.Select>
                            </Form>
                        </div>
                    </div>
                </CardBody>
                <CardBody>
                    <div className="row">
                        <div className="col-md-4 col-sm-12">Your time : </div>
                        <div className="col-md-8 col-sm-12">
                            <DisplayTime />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

export default TimeComponent;
