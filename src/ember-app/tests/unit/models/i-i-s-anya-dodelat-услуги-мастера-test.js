import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-anya-dodelat-услуги-мастера', 'Unit | Model | i-i-s-anya-dodelat-услуги-мастера', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-anya-dodelat-визит',
    'model:i-i-s-anya-dodelat-график-работы',
    'model:i-i-s-anya-dodelat-должности',
    'model:i-i-s-anya-dodelat-запись-визита',
    'model:i-i-s-anya-dodelat-клиент',
    'model:i-i-s-anya-dodelat-отсутствие',
    'model:i-i-s-anya-dodelat-производитель',
    'model:i-i-s-anya-dodelat-состав-услуги',
    'model:i-i-s-anya-dodelat-сотрудник',
    'model:i-i-s-anya-dodelat-табель-смены',
    'model:i-i-s-anya-dodelat-товар',
    'model:i-i-s-anya-dodelat-услуга',
    'model:i-i-s-anya-dodelat-услуги-мастера',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
