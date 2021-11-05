import * as React from 'react';
import {Appbar} from 'react-native-paper';
import {Platform} from 'react-native';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';


const AppBar = () => {
    const _handleMore = () => console.log('Shown more');

    return (
        <Appbar.Header>
            <Appbar.Content title="Todos"/>
            <Appbar.Action icon={MORE_ICON} onPress={_handleMore} />
        </Appbar.Header>
    )
}

export default AppBar;