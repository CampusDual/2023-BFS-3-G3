package com.campusdual.backend.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Lazy
@Repository(value = "EventDao")
@ConfigurationFile(
        configurationFile = "dao/EventDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")
public class EventDao extends OntimizeJdbcDaoSupport {
    public static final String ID = "eventid";
    public static final String NAME = "name";
    public static final String DESCRIPTION = "description";
    public static final String DATE = "date";
    public static final String GYM_ID = "gymid";
}
