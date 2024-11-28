import { ArraySubject, DisplayComponent, FSComponent, Subject, VNode } from '@microsoft/msfs-sdk';

import './MfdAtccomConnect.scss';
import { AbstractMfdPageProps } from 'instruments/src/MFD/MFD';
import { Footer } from 'instruments/src/MFD/pages/common/Footer';

import { Button } from 'instruments/src/MFD/pages/common/Button';
// import { FmsPage } from 'instruments/src/MFD/pages/common/FmsPage';
import { ActivePageTitleBar } from 'instruments/src/MFD/pages/common/ActivePageTitleBar';

import { DropdownMenu } from 'instruments/src/MFD/pages/common/DropdownMenu';
import { AdscButton } from 'instruments/src/MFD/pages/common/AdscButton';

//interface MfdAtccomRequest extends AbstractMfdPageProps {}

//export class MfdAtccomRequest extends DisplayComponent<MfdAtccomRequestProps> {

render(): VNode {
    return (
      <>
        <ActivePageTitleBar
          activePage={Subject.create('CONNECT')}
          offset={Subject.create('')}
          eoIsActive={Subject.create(false)}
          tmpyIsActive={Subject.create(false)}
        />

        <div class="requestpage-menu">
            <DropdownMenu
                label="VERTICAL"
                selectedIndex={}
                values={}
                />
            <DropdownMenu
                label="LATERALL"
                selectedIndex={}
                values={}
                />
            <DropdownMenu
                label="SPEED"
                selectedIndex={}
                values={}
                />
            <DropdownMenu
                label="CLEARENCE"
                selectedIndex={}
                values={}
                />
            <DropdownMenu
                label="WHEN CAN WE EXPECT"
                selectedIndex={}
                values={}
                />
            <DropdownMenu
                label="OTHER"
                selectedIndex={}
                values={}
                />
            <br></br>
            <DropdownMenu
                label="ADD TEXT"
                selectedIndex={}
                values={}
                />
        </div>

        </>
    )
}
