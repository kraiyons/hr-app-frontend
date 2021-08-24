import { useState } from 'react';
import sample from './sample.json';
import headersJson from './headers.json';

const UsersPage = () => {
  const [data] = useState(sample.data);
  const headers = headersJson;

  return (
    <main>
      <table>
        <thead>
          <tr>
            {Object.values(headers).map((k) => (
              <th>{k}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((e) => {
            return (
              <tr key={e._id}>
                {Object.keys(headers).map((k) => {
                  console.log(k);
                  let returnElement = '';

                  if (k.startsWith('date')) {
                    const date = new Date(e[k]);
                    returnElement = date.toLocaleDateString();
                  } else if (k === 'inactive') {
                    console.log(e[k]);
                    returnElement = (
                      <input type='checkbox' checked={!e[k]} disabeld />
                    );
                  } else returnElement = e[k];

                  return <td key={e._id + k}>{returnElement}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

export default UsersPage;
