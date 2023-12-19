import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-anya-dodelat-услуга', 'Unit | Serializer | i-i-s-anya-dodelat-услуга', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-anya-dodelat-услуга',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-anya-dodelat-единицы',
    'transform:i-i-s-anya-dodelat-пол',
    'transform:i-i-s-anya-dodelat-тип-занятости',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
