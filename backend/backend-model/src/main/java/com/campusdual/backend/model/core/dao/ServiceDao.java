package com.campusdual.backend.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Lazy
@Repository(value = "ServiceDao")
@ConfigurationFile(
        configurationFile = "dao/ServiceDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")
public class ServiceDao extends OntimizeJdbcDaoSupport {
    public static final String ID = "serviceid";
    public static final String NAME = "name";
    public static final String DESCRIPTION = "description";
    public static final String PRICE = "price";
    public static final String DURATION = "duration";
    public static final String CATEGORY_ID = "categoryid";
    public static final String GYM_ID = "gymid";
}
