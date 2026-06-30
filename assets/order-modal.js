// 订单弹窗组件 - 所有详情页共用
(function() {
  var base = window.location.pathname.indexOf('/detail') > -1 ? '../' : '';

  // 基础弹窗HTML
  var html = '<div class="modal-mask order-modal" id="order-modal">' +
    '<div class="modal-box">' +
    '<button class="modal-close" id="close-order">&times;</button>' +
    '<div class="order-form" id="order-form-content">' +
    '<div class="form-header"><h2>服务需求收集</h2><p>请填写以下信息，客服将尽快与您联系</p></div>' +
    '<form id="service-form">' +
    '<div id="form-fields-container"></div>' +
    '<button type="submit" class="submit-btn">立即下单</button>' +
    '</form>' +
    '<div class="form-success" id="form-success">' +
    '<div class="icon">&#10003;</div>' +
    '<h3>提交成功！</h3>' +
    '<p>客服将尽快与您联系，请保持电话畅通</p>' +
    '<button class="btn" onclick="document.getElementById(\'order-modal\').classList.remove(\'show\')">确定</button>' +
    '</div>' +
    '</div></div></div>';

  document.write(html);

  // 生成表单字段HTML
  function generateFieldHTML(field) {
    var html = '';
    var required = field.required ? ' required' : '';
    var requiredMark = field.required ? '<span class="req">*</span>' : '';

    switch(field.type) {
      case 'text':
      case 'tel':
      case 'number':
        html = '<div class="form-group"><label>' + requiredMark + field.name + '</label>' +
          '<input type="' + field.type + '" name="' + field.name + '" placeholder="' + (field.placeholder || '') + '"' + required + '></div>';
        break;
      case 'radio':
        html = '<div class="form-group"><label>' + requiredMark + field.name + '</label><div class="radio-group">';
        field.options.forEach(function(opt) {
          html += '<label><input type="radio" name="' + field.name + '" value="' + opt + '"' + required + '><span>' + opt + '</span></label>';
        });
        html += '</div></div>';
        break;
      case 'checkbox':
        html = '<div class="form-group"><label>' + requiredMark + field.name + '</label><div class="check-group">';
        field.options.forEach(function(opt) {
          html += '<label><input type="checkbox" name="' + field.name + '" value="' + opt + '"><span>' + opt + '</span></label>';
        });
        html += '</div></div>';
        break;
      case 'datetime':
        html = '<div class="form-group"><label>' + requiredMark + field.name + '</label>' +
          '<input type="datetime-local" name="' + field.name + '"' + required + '></div>';
        break;
      case 'textarea':
        html = '<div class="form-group"><label>' + requiredMark + field.name + '</label>' +
          '<textarea name="' + field.name + '" placeholder="' + (field.placeholder || '') + '"' + required + '></textarea></div>';
        break;
    }
    return html;
  }

  // 动态生成表单
  function generateForm(demandType) {
    if (typeof contactData === 'undefined') return;

    var container = document.getElementById('form-fields-container');
    var allHTML = '';

    // 需求类型选择
    allHTML += '<div class="form-group"><label><span class="req">*</span>需求类型</label>' +
      '<select name="需求类型" id="demand-type" required>' +
      '<option value="">请选择需求类型</option>';
    contactData.demandTypes.forEach(function(t) {
      allHTML += '<option value="' + t.key + '"' + (t.key === demandType ? ' selected' : '') + '>' + t.label + '</option>';
    });
    allHTML += '</select></div>';

    // 服务选项
    allHTML += '<div class="form-group" id="service-options-group" style="display:none">' +
      '<label><span class="req">*</span>服务项目</label>' +
      '<select name="服务选项" id="service-option"><option value="">请先选择需求类型</option></select></div>';

    // 客户信息
    allHTML += '<div class="section-divider"><span>客户信息</span></div>';
    contactData.customerFields.forEach(function(f) {
      allHTML += generateFieldHTML(f);
    });

    // 宠物信息
    allHTML += '<div class="section-divider"><span>宠物信息</span></div>';
    contactData.petFields.forEach(function(f) {
      allHTML += generateFieldHTML(f);
    });

    // 服务信息
    allHTML += '<div class="section-divider"><span>服务信息</span></div>';
    contactData.serviceFields.forEach(function(f) {
      allHTML += generateFieldHTML(f);
    });

    // 需求类型专属字段
    allHTML += '<div id="type-specific-fields"></div>';

    container.innerHTML = allHTML;

    // 初始化需求类型变化事件
    initDemandTypeChange(demandType);
  }

  // 初始化需求类型变化
  function initDemandTypeChange(initialType) {
    var demandTypeEl = document.getElementById('demand-type');
    var serviceOptionGroup = document.getElementById('service-options-group');
    var serviceOptionEl = document.getElementById('service-option');
    var typeFieldsContainer = document.getElementById('type-specific-fields');

    if (!demandTypeEl) return;

    function updateTypeFields(type) {
      // 清空专属字段
      typeFieldsContainer.innerHTML = '';

      var cfg = contactData.demandTypes.find(function(t) { return t.key === type; });
      if (!cfg) {
        serviceOptionGroup.style.display = 'none';
        return;
      }

      // 更新服务选项
      if (cfg.serviceOptions.length === 1) {
        serviceOptionEl.innerHTML = '<option selected>' + cfg.serviceOptions[0] + '</option>';
        serviceOptionEl.disabled = true;
        serviceOptionGroup.style.display = '';
      } else {
        serviceOptionEl.innerHTML = '<option value="">请选择服务项目</option>';
        cfg.serviceOptions.forEach(function(o) {
          serviceOptionEl.innerHTML += '<option>' + o + '</option>';
        });
        serviceOptionEl.disabled = false;
        serviceOptionGroup.style.display = '';
      }

      // 生成专属字段
      if (cfg.fields && cfg.fields.length > 0) {
        var fieldsHTML = '<div class="section-divider"><span>' + cfg.typeSection + '</span></div>';
        cfg.fields.forEach(function(f) {
          fieldsHTML += generateFieldHTML(f);
        });
        typeFieldsContainer.innerHTML = fieldsHTML;
      }
    }

    demandTypeEl.addEventListener('change', function() {
      updateTypeFields(demandTypeEl.value);
    });

    // 初始化
    if (initialType) {
      demandTypeEl.value = initialType;
      updateTypeFields(initialType);
    }
  }

  // 初始化表单逻辑
  function initOrderForm() {
    if (typeof contactData === 'undefined') return;

    // 获取当前页面类型
    var btn = document.querySelector('.btn-order');
    var pageType = btn ? btn.getAttribute('data-type') : '';

    // 生成表单
    generateForm(pageType);

    // 构建提交数据
    function buildPayload(form) {
      var values = {};

      // 订单状态
      values['f0muP1'] = [{ text: contactData.orderStatus }];

      // 需求类型（传编码）
      var demandType = document.getElementById('demand-type').value;
      var typeCfg = contactData.demandTypes.find(function(t) { return t.key === demandType; });
      if (typeCfg) {
        values['fVFGi1'] = typeCfg.code;
      }

      // 服务选项
      var serviceOptionEl = document.getElementById('service-option');
      if (serviceOptionEl && serviceOptionEl.value) {
        values['fPIgLc'] = [{ text: serviceOptionEl.value }];
      }

      // 日期
      var today = new Date();
      var dateStr = today.getFullYear() + '' + String(today.getMonth()+1).padStart(2,'0') + '' + String(today.getDate()).padStart(2,'0');
      values['fuJi1Z'] = dateStr;

      // 遍历所有字段，映射到sheetId
      function mapFields(fields) {
        fields.forEach(function(f) {
          if (!f.sheetId) return;
          var el = form.querySelector('[name="' + f.name + '"]');
          if (!el) return;
          if (f.type === 'radio') {
            var checked = form.querySelector('[name="' + f.name + '"]:checked');
            if (checked) values[f.sheetId] = [{ text: checked.value }];
          } else if (f.type === 'checkbox') {
            var checks = form.querySelectorAll('[name="' + f.name + '"]:checked');
            var arr = Array.from(checks).map(function(c) { return { text: c.value }; });
            if (arr.length > 0) values[f.sheetId] = arr;
          } else if (f.type === 'number') {
            var numVal = parseFloat(el.value);
            if (!isNaN(numVal) && numVal > 0) values[f.sheetId] = numVal;
          } else if (f.type === 'datetime') {
            if (el.value) {
              var timestamp = new Date(el.value).getTime();
              values[f.sheetId] = String(timestamp);
            }
          } else if (el.value) {
            values[f.sheetId] = el.value;
          }
        });
      }

      // 映射客户信息字段
      mapFields(contactData.customerFields);
      // 映射宠物信息字段
      mapFields(contactData.petFields);
      // 映射服务信息字段
      mapFields(contactData.serviceFields);
      // 映射需求类型专属字段
      var demandType = document.getElementById('demand-type').value;
      var typeCfg = contactData.demandTypes.find(function(t) { return t.key === demandType; });
      if (typeCfg && typeCfg.fields) {
        mapFields(typeCfg.fields);
      }

      return { add_records: [{ values: values }] };
    }

    // 按钮点击打开弹窗
    document.querySelectorAll('.service-order-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var modal = document.getElementById('order-modal');
        // 动态设置高度匹配.phone容器
        var phone = document.querySelector('.phone');
        if (phone) {
          modal.style.height = phone.offsetHeight + 'px';
        }
        // 重置表单状态
        var form = document.getElementById('service-form');
        var formSuccess = document.getElementById('form-success');
        if (form) {
          form.style.display = '';
          form.reset();
        }
        if (formSuccess) {
          formSuccess.classList.remove('show');
        }
        modal.classList.add('show');
      });
    });

    // 关闭弹窗
    document.getElementById('close-order').addEventListener('click', function() {
      document.getElementById('order-modal').classList.remove('show');
    });

    document.getElementById('order-modal').addEventListener('click', function(e) {
      if (e.target.classList.contains('modal-mask')) {
        e.target.classList.remove('show');
      }
    });

    // 表单提交
    document.getElementById('service-form').addEventListener('submit', async function(e) {
      e.preventDefault();
      var form = e.target;
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var submitBtn = form.querySelector('.submit-btn');
      submitBtn.disabled = true;
      submitBtn.textContent = '提交中..';
      var payload = buildPayload(form);
      try {
        await fetch(contactData.webhook, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      } catch (err) {
        console.warn('webhook request failed:', err);
      }
      submitBtn.disabled = false;
      submitBtn.textContent = '立即下单';
      form.style.display = 'none';
      document.getElementById('form-success').classList.add('show');
    });
  }

  // 等待DOM和数据加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initOrderForm);
  } else {
    initOrderForm();
  }
})();
