from flask import Flask, abort
from flask import request

app = Flask(__name__)


def there_should_be_model(user):
    """для данного юзера список топовых <lat, lon>"""
    return str([(0, 0), (0, 1), (0, 2)])


def validate_user(user):
    keys = {'age', 'current_time', 'date', 'goal', 'group_type', 'lat', 'lon', 'ppl_numb', 'preferences', 'sex'}
    return {*user} == keys


@app.route('/getPrediction', methods=['POST'])
def hello_world():
    if not request or not validate_user(request.json):
        abort(403)
    return there_should_be_model(request.json)


if __name__ == '__main__':
    app.run()
