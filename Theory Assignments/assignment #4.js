import React, { useState } from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    payload: text,
  };
};

const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    payload: id,
  };
};

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            text: action.payload,
            completed: false,
          },
        ],
      };

    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    default:
      return state;
  }
};

const store = createStore(todoReducer);

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <View>
      {todos.map((todo) => (
        <View key={todo.id} style={styles.todoItem}>
          <TouchableOpacity onPress={() => toggleTodo(todo.id)}>
            <Text
              style={{
                textDecorationLine: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  };

  return (
    <View style={styles.addTodoContainer}>
      <TextInput
        placeholder="Add a new task"
        value={text}
        onChangeText={(value) => setText(value)}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.addButton}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const ConnectedTodoList = connect(mapStateToProps, { toggleTodo })(TodoList);
const ConnectedAddTodo = connect(null, { addTodo })(AddTodo);

// App component
function App() {
  const Tab=createBottomTabNavigator();7
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Todo') {
                iconName = focused ? 'tasks' : 'tasks';
              } else if (route.name === 'Stats') {
                iconName = focused ? 'bar-chart' : 'bar-chart';
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Todo" component={ConnectedTodoList} />
          <Tab.Screen name="Stats" component={StatsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  addTodoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderBottomWidth: 1,
    padding: 5,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  todoItem: {
    marginVertical: 5,
  },
});

export default App;
