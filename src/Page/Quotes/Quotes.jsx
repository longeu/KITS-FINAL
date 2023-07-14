import { Col } from "antd"
import { QuotesIcon } from "../../assets/quotesIcon"
import { useEffect, useState } from "react"
import baseApi from "../../api/baseApi";


export const Quotes = () => {

    const [author, setAuthor] = useState("");
    const [quotes, setQuotes] = useState("");

    async function fetchQuotes() {
        const url = "/quote";

        try {
            const response = await baseApi.get(url);
            setQuotes(response.quote);
            setAuthor(response.author);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchQuotes()
        }, 3000);
        return () => clearTimeout(timer);
    }, [fetchQuotes])


    return (
        <div>
            <Col span={8} className="content-header checkboard">
                <QuotesIcon />
                <h1 className="header-title">Random Quotes Form Everywhere</h1>
            </Col>
            <div className="content-body">
                <div className="quotes-container">
                    <h1 >
                        {author}
                    </h1>
                    <h4 style={{ fontWeight: "normal" }}>
                        {quotes}
                    </h4>
                </div>
            </div>
        </div>
    )
}