import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Content extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Header</Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed hendrerit ex. Fusce hendrerit ac risus semper imperdiet. Nulla vitae semper purus, a vehicula neque. Suspendisse dictum dui non tortor tristique, nec rutrum justo aliquam. Cras porttitor metus odio, at volutpat felis iaculis vel. Praesent sit amet tellus faucibus, feugiat nibh a, varius lectus. 
                    </Text>

                    <Text style={styles.paragraph}>
                        Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam tellus dolor, aliquet vitae mollis sit amet, varius rutrum nulla. In lacinia elementum euismod. Donec at varius risus. Vivamus sed euismod odio, ut varius arcu. Duis vulputate mattis odio, ac convallis dui gravida tempor. Sed ornare feugiat risus, vitae scelerisque turpis accumsan a. Suspendisse a ornare felis, sed dapibus metus. Nam in mattis velit, ut posuere elit.
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E9EAED'
    },
    header: {
        padding: 10,
        backgroundColor: 'yellow',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 18,
        fontWeight: '600'
    },
    content: {
        padding: 10,
        margin: 10,
        backgroundColor: '#F6F7F8',
        borderRadius: 5
    },
    paragraph: {
        marginBottom: 15,
        fontSize: 16,
        lineHeight: 22
    },
    button: {
        backgroundColor: '#DDD',
        padding: 10,
        alignItems: 'center'
    }
});

export default Content;