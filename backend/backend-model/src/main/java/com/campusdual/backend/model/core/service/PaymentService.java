package com.campusdual.backend.model.core.service;
import com.campusdual.backend.api.core.service.IPaymentService;
import com.campusdual.backend.model.core.dao.PaymentDao;
import com.campusdual.backend.model.core.dao.UserDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.Map;

    @Lazy
    @Service("PaymentService")
    public class PaymentService implements IPaymentService {

        @Autowired
        private PaymentDao paymentDao;

        @Autowired
        private DefaultOntimizeDaoHelper daoHelper;
        @Override
        public EntityResult paymentQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException {
            return this.daoHelper.query(paymentDao, keyMap, attrList);
        }

        @Override
        @Transactional(rollbackFor = Exception.class)
        public EntityResult paymentInsert(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            keyMap.put(UserDao.ID,auth.getName());
            return this.daoHelper.insert(this.paymentDao, keyMap);
        }

        @Override
        @Transactional(rollbackFor = Exception.class)
        public EntityResult paymentUpdate(Map<String, Object> attributes, Map<String, Object> keyValues) throws OntimizeJEERuntimeException {
            return this.daoHelper.update(this.paymentDao, attributes, keyValues);
        }

        @Override
        public EntityResult paymentDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
            return this.daoHelper.delete(this.paymentDao, keyMap);
        }


    }


