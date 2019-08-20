import React from 'react';
import styled from 'styled-components';
import { placeholder } from '@babel/types';

const TableContainer = styled.div`
    text-align: center;
`;

const HtmlTable = styled.table`
    width: 100%;
`;

const TH = styled.th`
    background-color: rgb(23, 43, 58);
    height: 40px;
`;

const TRow = styled.tr`
    background-color: rgb(23, 43, 58, 0.4);
    height: 40px;
`;

export interface TableProps<DataItem> {
    columns: Array<{ title: string, key: keyof DataItem }>
    items: DataItem[],
    placeholder?: string
}

export const Table = <DataItem, >(props: TableProps<DataItem>) => {
    const columns = props.columns.map(item =>
        <TH key={item.key as string}>
            {item.title}
        </TH>
    )
    const rows = props.items.map((item, index) =>
        <TRow key={index}>
            { props.columns.map(column =>
                <td key={column.key as string}>
                    {item[column.key]}
                </td>
            )}
        </TRow>
    )
    return <TableContainer>
        <HtmlTable>
            <thead>
                <tr>{columns}</tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </HtmlTable>
        { !props.items.length && (props.placeholder || 'Empty') }
    </TableContainer>
}

export default Table;
