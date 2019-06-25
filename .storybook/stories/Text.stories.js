import React from 'react';
import {storiesOf} from '@storybook/react';

import HeadingInfoDecorator from '../storiesDecorators/HeadingInfoDecorator';

import {
    Heading,
    Content,
    List,
} from '../../src';


storiesOf('Типографика', module)
    .add('Заголовки', () => (
        <HeadingInfoDecorator>
            <Heading>h1. Heading</Heading>
            <Heading type="2">h2. Heading</Heading>
            <Heading type="3">h3. Heading</Heading>
            <Heading type="4">h4. Heading</Heading>
            <Heading type="5">h5. Heading</Heading>
            <Heading type="6">h6. Heading</Heading>
        </HeadingInfoDecorator>
    ))
    .add('Параграфы', () => (
        <div>
            <Content>
                Это русское поселение на побережье Северной Калифорнии (США), в 80 км к северу от Сан-Франциско,
                основано в 1812 году Российско-Американской компанией для промысла и торговли пушниной. Крепость
                Росс была самым южным русским поселением в Северной Америке. В 1841 году компания продала свою
                собственность крупному землевладельцу Джону Саттеру[2]. В настоящее время это исторический парк
                штата Калифорния, Национальный исторический памятник США.
            </Content>
            <Content>
                Единственное оригинальное строение, сохранившееся до наших дней, — дом последнего русского
                коменданта Ротчева — объявлено объектом исторической ценности национального значения. Остальные
                строения являются реконструкцией, тем не менее форт является единственной деревянной крепостью
                Российской Империи XIX века, дошедшей до нас
            </Content>
            <Content>
                В обиходе и научных трудах крепость Росс сегодня часто именуют американизированным названием
                Форт-Росс, что не вполне корректно с точки зрения истории: в XIX веке русские называли это поселение
                крепостью Росс (а также — колонией Росс или же селением Росс)[4][5]. А название Fort Ross является
                буквальным переводом на английский язык русского названия крепость Росс.
            </Content>
        </div>
    ));