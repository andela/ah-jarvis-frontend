import api from './api';

describe('API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('Should fetch from an endpoint. ', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    api({
      method: 'GET',
      endpoint: '/articles/',
    }).then((res) => {
      expect(res.data).toEqual('12345');
    });
  });

  it('Should post to an endpoint. ', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: 'testing' }));
    api({
      method: 'POST',
      endpoint: '/articles/',
      data: {
        title: 'Test',
        body: 'Testing',
      },
    }).then((res) => {
      expect(res.data).toEqual('testing');
    });
  });

  it('Should return valid errors. ', () => {
    fetch.mockReject(new Error('Fake error message'));
    api({
      method: 'POS',
      endpoint: '/articles/',
    }).catch((res) => {
      expect(res.message).toEqual('Fake error message');
    });
  });
});
