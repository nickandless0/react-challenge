import React, { useEffect, useState } from 'react';
import { logoes } from '../api';
import Utils from '../utils';
import {
    AppContainer,
    Row,
    Col
} from '../components'
import '../assets/styles/logoes_list.css'
import LogoItem from '../components/logo_item';

const ListLogoes = () => {

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadLogoes();
    }, [])

    const loadLogoes = async () => {
        let response = await logoes.list();
        let data = response.data;
        data = data.map(a => { return { ...a, size: a.source_items?.audience_size } });
        data = Utils.sortListBySize(data, 'size')

        setList(data);
        setLoading(false);
    }

    const renderList = () => {
        return list.map(({ source_items: { id }, social_media_pages: { picture, name } }) =>
            <Col span={3} key={id}>
                <LogoItem
                    name={name}
                    logo={picture}
                    id={id}
                />
            </Col>
        )
    }

    return (
        <AppContainer>
            <div className='list-wrapper'>
                <h1>Choose a Conde Nast brand's audience:</h1>
                <Row>
                    {renderList()}
                </Row>
            </div>
        </AppContainer>
    )
}

export default ListLogoes;